import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onSubmit}) {
  const [formData, setFormData] = useState({
    name: "",
    hp: 100,
    sprites: {
      front: "",
      back: ""
    }
  })

  function handleChange(event) {
    console.log(event.target.value)

    console.log(event.target.name)
    if (event.target.name === "frontUrl") {
      setFormData(
        {...formData, sprites: {front: event.target.value, back: formData.sprites.back}}
      )
    } else if (event.target.name === "backUrl") {
      setFormData(
        {...formData, sprites: {back: event.target.value, front: formData.sprites.front}}
      )
    } else {
      setFormData({...formData, 
        [event.target.name] : event.target.value})
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(formData)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" 
            onChange={handleChange}
            value={formData.name}
          />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" 
            onChange={handleChange}
            value={formData.hp}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleChange}
            value={formData.sprites.front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleChange}
            value={formData.sprites.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
