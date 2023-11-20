import React from 'react';

const Settings = () => {
    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h1>Settings & Privacy</h1>
                </div>
                <div className="card-body">
                    <div className="accordion" id="accordionConfigPrivacidad">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingConfigCuenta">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseConfigCuenta" aria-expanded="true" aria-controls="collapseConfigCuenta">
                                Account Setup
                                </button>
                            </h2>
                            <div id="collapseConfigCuenta" className="accordion-collapse collapse show" aria-labelledby="headingConfigCuenta" data-bs-parent="#accordionConfigPrivacidad">
                                <div className="accordion-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">User's name</li>
                                        <li className="list-group-item">Password</li>
                                        <li className="list-group-item">Notifications</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingPrivacidadDatos">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePrivacidadDatos" aria-expanded="false" aria-controls="collapsePrivacidadDatos">
                                Privacy Policy
                                </button>
                            </h2>
                            <div id="collapsePrivacidadDatos" className="accordion-collapse collapse" aria-labelledby="headingPrivacidadDatos" data-bs-parent="#accordionConfigPrivacidad">
                                <div className="accordion-body">
                                    <ul className="list-group">
                                        <li className="list-group-item">Settings & Privacy</li>
                                        <li className="list-group-item">Delete account</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings ;
