import React, { Component } from 'react';

class NoteItem extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id={this.props.index}>
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#note__list" href={"#number" + this.props.index} aria-expanded="true" aria-controls="section1ContentId">
                        {this.props.noteTitle}
                        </a>
                    </h5>
                </div>
                <div id={"number" + this.props.index} className="collapse in" role="tabpanel" aria-labelledby={this.props.index}>
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteItem;