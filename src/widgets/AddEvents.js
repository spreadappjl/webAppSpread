import React from 'react'; 
import './AddEvents.css';

export default class AddEvents extends React.Component {
    render() {
        return (
            this.props.showPainel &&
            <div>
                <div className="AddEventsShowPainel">
                    <div>Sacanagem</div>
                </div>
            </div>
        );
    }
}