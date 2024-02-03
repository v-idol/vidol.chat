import { DanceStore, useDanceStore } from '@/store/dance';
import { useViewerStore } from '@/store/viewer';
import { Avatar, Icon } from '@lobehub/ui';
import { Slider, Typography } from 'antd';
import classNames from 'classnames';
import {
  ListMusic,
  PauseCircle,
  PlayCircle,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeXIcon,
} from 'lucide-react';
import { memo, useEffect, useRef, useState } from 'react';
import { Flexbox } from 'react-layout-kit';
import PlayList from './PlayList';
import { useStyles } from './style';

interface PlayerProps {
  style?: React.CSSProperties;
  className?: string;
}

const danceSelectors = (s: DanceStore) => {
  return {
    isPlaying: s.isPlaying,
    setIsPlaying: s.setIsPlaying,
    prevDance: s.prevDance,
    nextDance: s.nextDance,
    currentPlay: s.currentPlay,
  };
};

function Player(props: PlayerProps) {
  const { style, className } = props;
  const ref = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.2);
  const [open, setOpen] = useState(false);
  const [tempVolume, setTempVolume] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currrentProgress, setCurrrentProgress] = useState(0);
  const { isPlaying, setIsPlaying, prevDance, nextDance, currentPlay } =
    useDanceStore(danceSelectors);
  const viewer = useViewerStore((s) => s.viewer);

  const { styles } = useStyles();

  useEffect(() => {
    if (!currentPlay) return;

    if (isPlaying) {
      fetch(currentPlay.src)
        .then((res) => res.arrayBuffer())
        .then((buffer) => {
          viewer.model?.dance(buffer);
          ref.current && ref.current.play();
        });
    } else {
      ref.current && ref.current.pause();
      ref.current && (ref.current.currentTime = 0);
    }
  }, [isPlaying, currentPlay, viewer]);

  const togglePlayPause = () => {
    if (isPlaying) {
      viewer.model?.stopDance();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
  };

  function formatDurationDisplay(duration: number) {
    const min = Math.floor(duration / 60);
    const sec = Math.floor(duration - min * 60);
    return [min, sec].map((n) => (n < 10 ? '0' + n : n)).join(':');
  }

  return (
    <div className={classNames(styles.container, className)} style={style}>
      <PlayList open={open} onClose={() => setOpen(false)} />
      <audio
        src={currentPlay?.audio}
        ref={ref}
        preload="metadata"
        onDurationChange={(e) => setDuration(e.currentTarget.duration)}
        onCanPlay={(e) => {
          e.currentTarget.volume = volume;
        }}
        onEnded={() => {
          viewer.model?.stopDance();
          nextDance();
        }}
        onTimeUpdate={(e) => {
          setCurrrentProgress(e.currentTarget.currentTime);
        }}
      />
      <div className={styles.player}>
        <Avatar src={currentPlay?.cover} size={96} shape="square" />
        <Flexbox style={{ margin: '0px 12px', flexGrow: 1 }}>
          <div className={styles.top}>
            <Typography.Text ellipsis={{ tooltip: currentPlay?.name }} className={styles.name}>
              {currentPlay?.name || '请从舞蹈列表中选取'}
            </Typography.Text>

            <div className={styles.control}>
              <SkipBack style={{ marginRight: 24, cursor: 'pointer' }} onClick={prevDance} />
              <Icon
                // @ts-ignore
                icon={isPlaying ? PauseCircle : PlayCircle}
                style={{ fontSize: 48, cursor: 'pointer' }}
                onClick={togglePlayPause}
              />
              <SkipForward style={{ marginLeft: 24, cursor: 'pointer' }} onClick={nextDance} />
            </div>

            <div className={styles.right}>
              <ListMusic style={{ cursor: 'pointer' }} onClick={() => setOpen(true)} />
              <div className={styles.volume} style={{ marginLeft: 18 }}>
                {volume === 0 ? (
                  <VolumeXIcon
                    style={{ cursor: 'pointer' }}
                    onClick={() => setVolume(tempVolume)}
                  />
                ) : (
                  <Volume2
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setTempVolume(volume);
                      setVolume(0);
                    }}
                  />
                )}
                <Slider
                  min={0}
                  max={1}
                  tooltip={{ open: false }}
                  step={0.05}
                  style={{ width: 80, marginLeft: 12 }}
                  value={volume}
                  onChange={(volume) => {
                    if (!ref.current) return;
                    ref.current.volume = volume;
                    setVolume(volume);
                  }}
                />
              </div>
            </div>
          </div>

          <Flexbox horizontal align="center">
            <span style={{ marginRight: 8 }}>{formatDurationDisplay(currrentProgress)}</span>
            <Slider
              min={0}
              max={duration}
              value={currrentProgress}
              tooltip={{ open: false }}
              style={{ width: '100%' }}
            />
            <span style={{ marginLeft: 8 }}>{formatDurationDisplay(duration)}</span>
          </Flexbox>
        </Flexbox>
      </div>
    </div>
  );
}

export default memo(Player);