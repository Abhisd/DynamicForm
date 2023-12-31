import formFields from "../JSONData/formFields.json";
import { useState, useEffect } from "react";
import ElementSwitchCase from "../ElementSwitchCase";
import { FormContext } from "../FormContext";
//console.log(formFields);
export default function () {
    const [elements, setElements] = useState(null);
    useEffect(() => {
      setElements(formFields[0])
  
    }, [])
    const { fields, page_label } = elements ?? {}
    const handleSubmit = (event) => {
      event.preventDefault();
  
      console.log(elements)
    }
    const handleChange = (id, event) => {
      const newElements = { ...elements }
      newElements.fields.forEach(field => {
        const { field_type, field_id } = field;
        if (id === field_id) {
          switch (field_type) {
            case 'checkbox':
              field['field_value'] = event.target.checked;
              break;
  
            default:
              field['field_value'] = event.target.value;
              break;
          }
  
  
        }
        setElements(newElements)
      });
      //console.log(elements)
    }
    return (
      <FormContext.Provider value={{ handleChange }}>
        <div className="App container">
          <h3>{page_label}</h3>
          <form>
            {fields ? fields.map((field, i) => <ElementSwitchCase key={i} field={field} />) : null}
            <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Submit</button>
          </form>
  
        </div>
      </FormContext.Provider>
    );
  }
  