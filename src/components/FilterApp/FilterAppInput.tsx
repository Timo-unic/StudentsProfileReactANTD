import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

type IFilterProps = {
    letterSearch: string;
    handleLettersChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FilterAppInput = ({
    letterSearch,
    handleLettersChange,
}: IFilterProps) => {
    return (
        <>
            <div className="flex max-w-auto">
                <Input
                    type="text"
                    name="filter-lastname"
                    placeholder="enter letters Last Name"
                    prefix={<UserOutlined />}
                    value={letterSearch}
                    onChange={handleLettersChange}
                />
            </div>
        </>
    );
};
export default FilterAppInput;
// import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
// const selector = useAppSelector((state) => state.lettersNameState.filterBy);
// const dispatch = useAppDispatch();
