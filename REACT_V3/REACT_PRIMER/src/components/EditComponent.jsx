import React, { useState } from 'react';

const EditComponent = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        bio: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos a tu servidor o realizar otras acciones con ellos
        console.log('Datos del perfil:', formData);
        alert('Perfil actualizado con éxito');
    };
    return (
        <div className=" card container col-5 mt-5 mb-4 p-3 d-flex justify-content-center  bg-light-subtle " style={{ boxShadow: '0 0 10px rgba(23, 32, 42)' }}>
            <h3>Profile Editor</h3>
            <div onSubmit={handleSubmit} >
                <div className='username'>
                    <h4>User name:</h4>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="email">
                    <h5>E-mail :</h5>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="bio">
                    <h5>Biography:</h5>
                    <input
                        as="textarea"
                        rows={4}
                        placeholder="Enter your biography"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='col-3 p-3 d-flex justify-content-center gap-3  '>
                    <button className='btn btn-outline-info' variant="primary" type="submit">
                        Save
                    </button>
                    <button className='btn btn-outline-info' variant="secondary" type='submit'>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};
export default EditComponent;
