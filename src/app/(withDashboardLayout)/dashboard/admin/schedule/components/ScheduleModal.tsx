import PHForm from "@/components/Forms/PHForm";
import PHModal from "@/components/Shared/PhModal/PHModal";
import { Button } from "@mui/material";
import { FieldValues } from "react-hook-form";

type TProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const ScheduleModal = ({ open, setOpen }: TProps) => {
    const handleFormSubmit = async (values: FieldValues) => {
        console.log(values)

    };
    return (
        <PHModal open={open} setOpen={setOpen} title="Create Schedule">
            <PHForm onSubmit={handleFormSubmit} >
                <Button type="submit">Create</Button>
            </PHForm>
        </PHModal>
    );
};

export default ScheduleModal;