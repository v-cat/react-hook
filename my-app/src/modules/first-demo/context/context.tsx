import React from 'react';
import { Button } from 'antd';

class App extends React.Component {
    render() {
        return <ToolBar type="primary" ></ToolBar>
    }
}
function ToolBar(props: any): any {
    return (
        <div>
            <ThemedButton type={props.type} />
        </div>
    );


}
const ThemedButton = (props: any) => {
    return <Button type={props.type}  >App</Button>;
}

export default App;