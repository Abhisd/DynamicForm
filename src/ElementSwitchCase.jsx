import Input from "./Elements/Input";
import Select from "./Elements/Select";
import Checkbox from "./Elements/Checkbox";
import React from "react";
export default function ({ field: { field_type, field_id, field_label, field_placeholder, field_value, field_options } }) {
    switch (field_type) {
        case 'text':
            return (
                <Input
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
                />
            )
            case 'select':
                return (<Select
                    field_id={field_id}
                    field_label={field_label}
                    field_placeholder={field_placeholder}
                    field_value={field_value}
                    field_options={field_options}
                />)
            case 'checkbox':
                return (<Checkbox
                    field_id={field_id}
                    field_label={field_label}
                    field_value={field_value}
                />)
    
            default:
                return null;
    }
}