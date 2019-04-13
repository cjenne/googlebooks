import React from "react";

const SearchBox = props => {
    return (
        <form>
            <input type="search">
            <div className="form-control ds-input">
                <label className="Search"><h3>Book Search</h3></label>
                <br></br>
                <input className="col-12 form-control"
                    value={props.search}
                    id="search-input"
                    type="text"
                    name="searchBook"
                    placeholder="The Hunger Games"
                    autocomplete="true"
                    data-docs-version="4.3"
                    spellcheck="true"
                    role="combobox" 
                    onChange={props.handleInputChange}
                />
            </div>
            </input>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Search
            </button>
        </form>
    )
}



export default SearchBox