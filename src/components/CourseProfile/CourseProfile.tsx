import { Card, Col, Row } from "antd";

// type Props = {}
const CourseProfile = () => {
    return (
        <Row gutter={16}>
            <Col span={12}>
                <Card title="Card title" bordered={true}>
                    Card content
                </Card>
            </Col>
            <Col span={12}>
                <Card title="Card title" bordered={true}>
                    Card content
                </Card>
            </Col>
            <Col span={12}>
                <Card title="Card title" bordered={true}>
                    Card content
                </Card>
            </Col>
        </Row>
    );
};
export default CourseProfile;
