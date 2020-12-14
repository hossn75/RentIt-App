import React from 'react'

function AddListing() {
    return (
        <div className = "w3-modal w3-animate-opacity" id = "addListing">
            <div className = "w3-modal-content w3-card">
                <header className = "w3-container w3-blue">
                    <span className = "w3-button w3-display-topright w3-hover-none w3-hover-text-white" onClick = {() => {
                        document.getElementById("addListing").style.display = "none"
                    }}>X</span>
                    <h2>Add Listing</h2>
                </header>
                <form className = "w3-container">
                    <div className = "w3-section">
                        <label htmlFor = "title">Title</label>
                        <input type = "text" id = "title" className = "w3-input w3-border w3-margin-bottom" />
                        <label htmlFor = "title">Description</label>
                        <input type = "text" id = "description" className = "w3-input w3-border w3-margin-bottom" />
                        <label htmlFor = "title">Image URL</label>
                        <input type = "text" id = "image" className = "w3-input w3-border w3-margin-bottom" />
                        <label htmlFor = "title">Address</label>
                        <input type = "text" id = "address" className = "w3-input w3-border w3-margin-bottom" />
                        <label htmlFor = "title">Price</label>
                        <input type = "text" id = "price" className = "w3-input w3-border w3-margin-bottom" />
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default AddListing