import { Flex, Radio } from "antd";

// type Props = {};
const RadioApp = () => {
    return (
        <Flex vertical gap="middle" style={{ textAlign: "center" }}>
            <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">CsharpStarter</Radio.Button>
                <Radio.Button value="b">Git</Radio.Button>
                <Radio.Button value="c"> CsharpEssential</Radio.Button>
                <Radio.Button value="d">CsharpProfessional</Radio.Button>
                <Radio.Button value="e">Sql</Radio.Button>
                <Radio.Button value="f">EFCore</Radio.Button>
                <Radio.Button value="g" disabled>
                    AspNetCore
                </Radio.Button>
            </Radio.Group>
        </Flex>
    );
};
export default RadioApp;
