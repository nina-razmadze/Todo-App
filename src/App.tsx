import { Button } from "antd";
import "./App.css";
import { Layout, Row, Col } from "antd";
import "./App.css";

const style: React.CSSProperties = {
  background: "#0092ff",
  padding: "8px 0",
};
const { Header } = Layout;
import { Input, Space } from "antd";

const { Search } = Input;

function App() {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    width: "500px",
    backgroundColor: "#7dbcea",
  };
  return (
    <>
      <Layout>
        <Header style={headerStyle}>
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              enterButton
              style={{ width: 400, padding: 15 }}
            />
          </Space>
        </Header>

        <Row gutter={[16, 27]}>
          <Col span={5}>
            <div style={style}>check</div>
          </Col>
          <Col span={14}>
            <div style={style}>workout</div>
          </Col>
          <Col span={5}>
            <div style={style}>delete</div>
          </Col>
        </Row>
        <div>sdfda</div>
        <Row gutter={[16, 27]}>
          <Col span={5}>
            <div style={style}>check</div>
          </Col>
          <Col span={14}>
            <div style={style}>workout</div>
          </Col>
          <Col span={5}>
            <div style={style}>delete</div>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default App;
