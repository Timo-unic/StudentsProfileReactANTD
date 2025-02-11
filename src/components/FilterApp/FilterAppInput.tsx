import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

type IFilterProps = {
    filterName: object;
};

const FilterAppInput = ({ filterName }: IFilterProps) => {
    return (
        <>
            <div className="flex max-w-auto">
                <Input
                    type="text"
                    name="filter-lastname"
                    placeholder="enter letters Last Name"
                    prefix={<UserOutlined />}
                    {...filterName}
                />
            </div>
        </>
    );
};
export default FilterAppInput;
// import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
// const selector = useAppSelector((state) => state.lettersNameState.filterBy);
// const dispatch = useAppDispatch();
