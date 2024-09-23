import React from "react";
//import bootstrap components
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const TabComponent = (props) => {
    //set state from url hash
    const [selectedTab, setSelectedTab] = useState(props.location.hash.substring(1));

    const handleSelect = (e) => {
        //set state
        setSelectedTab(e);
        //update url
        props.history.replace({
            hash: `${e}`
        });
    }

    return (
        //set active key, if no url hash set default to home
        <Tabs
            activeKey={selectedTab ? selectedTab : 'home'}
            onSelect={(e) => handleSelect(e)}
        >
            <Tab eventKey="home" title="home">
            ....
            </Tab>
            <Tab eventKey="about" title="about">
            ....
            </Tab>
        </Tabs>
    );
}
export default TabComponent;
