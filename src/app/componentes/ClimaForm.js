import React from "react";

const ClimaForm = (props) => (
    <div className="card card-body">
        <form onSubmit={props.getClima}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Tu cuidad natal" className="form-control" autoFocus />
            </div>&nbsp;
            <div className="form-group">
                <input type="text" name="pais" placeholder="Tu nacionalidad natal" className="form-control" autoFocus />
            </div>&nbsp;
            <div className="form-group">
                <button className="btn btn-primary btn-block">
                    Get Weather
                </button>
            </div>
        </form>
    </div>
)

export default ClimaForm;