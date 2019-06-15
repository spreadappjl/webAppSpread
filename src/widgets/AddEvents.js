import React from 'react'; 
import './AddEvents.css';

export default class AddEvents extends React.Component {
    render() {
        return (
            this.props.showPainel &&
            <div className="AddEventsShowPainel">
                <div className="AddEventsShowPainel">
                    <div className="showPainelWrapper"></div>
                </div>
            </div>
        );
    }
}