import React, { Component } from 'react';

class homePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            search: ''
        }
    }

   
    updateSearch(event) {
        this.setState({ search: event.target.value });
    }

    render() {
        
        return (
            <div>
                <nav class="navbar fixed-top">
                    <div className="container">
                        <div className="row ">
                            
                            <div className="col-sm-8">
                                {/*Search */} 
                                <div className="search-body">
                                    <input type="text" className="search" placeholder="Search Shows and People" value={this.state.search} onChange={this.updateSearch.bind(this)} />
        </div> 
                        </div>
                        </div>
                    </div>


                </nav>
                
            </div>
        );
    }
}

export default homePage;