import { useAgentStore } from '@/store/role';
import { Card, List } from 'antd';

const { Meta } = Card;

const Role = () => {
  const { setCurrentRole, roleList } = useAgentStore();
  return (
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 12 }}>角色列表</div>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={roleList}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              // eslint-disable-next-line @next/next/no-img-element,
              cover={<img src={item.cover} alt="cover" />}
              onClick={() => {
                setCurrentRole(item.modelPath);
              }}
            >
              <Meta title={item.cnName} description={item.description} />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Role;
