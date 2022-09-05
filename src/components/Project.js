import React from "react";
import data from '../data.js';

const Project = () => {
    const left = "<<";
    const right = ">>"

    const[count, setCount] = React.useState(0);

    const[dataList, setDataList] = React.useState({
        title: data[count].title,
        date: data[count].date,
        description: data[count].description
    });

    function rightHandle() {
       if(count < 7){
            setCount(prevCount => prevCount + 1);
            setDatafunction(count+1);
       }
    }

    function leftHandle() {
        if(count > 0){
            setCount(prevCount => prevCount - 1);
            setDatafunction(count-1);
        }
    }

    function setDatafunction(count){
        const arr = data;
        const newDate = arr[count].date;
        const newTitle = arr[count].title;
        const newDes = arr[count].description;
        setDataList(prevData => ({
            title: newTitle,
            date: newDate,
            description: newDes
        }));
    }

    return (
        <div className="projectContainer" id="projectSection">
            <div className="projectBar">
                <p>PROJECTS</p>
            </div>
            <div className="projectStar">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 0L19.5656 11.1428L27.7862 3.3422L22.9078 13.571L34.1435 12.0922L24.1844 17.5L34.1435 22.9078L22.9078 21.429L27.7862 31.6578L19.5656 23.8572L17.5 35L15.4344 23.8572L7.21376 31.6578L12.0922 21.429L0.85651 22.9078L10.8156 17.5L0.85651 12.0922L12.0922 13.571L7.21376 3.3422L15.4344 11.1428L17.5 0Z" fill="#D6BDA6" />
                </svg>
            </div>
            <div className="cardContainer">
                <button className="leftButton" onClick={leftHandle}>{left}</button>
                <div className="card">
                    <p className="date">{dataList.date}</p>
                    <h4 className="projectTitle">{dataList.title}</h4>
                    <p className="description">{dataList.description}</p>
                </div>
                <button className="rightButton" onClick={rightHandle}>{right}</button>
            </div>
        </div>
    );
};

export default Project;