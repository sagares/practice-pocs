import React, { useContext, useEffect } from "react";
import ChatUIContext from "../../../context/ChatUIContext";
import Header from "../header/Header";
import "./RightSection.scss";

const RightSection = () => {
    const {getActionItems, setActionItems} = useContext(ChatUIContext);

    const actionHandler = (name) => {
        console.log("right action>>> ", name);
    };

    useEffect(() => {
        setActionItems("rightActions", [
            { name: "Search", actionHandler },
            { name: "AttachFile", actionHandler },
            { name: "MoreVert", actionHandler },
          ]);
    }, []);

    const oldObject = {"contentType":"ABOUT_MESSAGE","id":"b7321bbc-d77c-451f-ba73-1bac836d998b","revision":4,"owner":{"id":"gmps-abel","displayName":"SELF"},"title":{"value":"28 June master content test owner self","locked":false,"editable":true},"subTitle":{"value":"28 June master content test owner self","locked":false,"editable":true},"media":{"value":{"primaryImages":[{"assetType":"Image","id":"54cae556-e75a-474a-80fb-c7ab448cdbb5","url":{"value":"https://media-dmg.dit-cfi-pdx.assets-cdk.com/websites/content/cblt-ms-gmps-en-us//027d3dbdff4c4d8793fd0daf8003d342.jpg","locked":false},"tags":{"value":[],"locked":false},"name":{"value":"1","locked":false},"altText":{"value":"1","locked":false},"aspectRatios":{"16:9":{"url":"https://media-dmg.dit-cfi-pdx.assets-cdk.com/websites/content/cblt-ms-gmps-en-us//027d3dbdff4c4d8793fd0daf8003d342_c2x0-356x200.jpg","topLeftX":2,"topLeftY":0,"width":356,"height":200,"zoom":-10.0}}}]},"locked":false,"editable":true},"audit":{"createdOn":"2021-07-16T10:09:51","createdBy":"Santosh.Sagare@sincrodigital.com"},"approval":{"approvedOn":"2021-07-21T06:05:51","approvedBy":"Soumita.Mallik@sincrodigital.com"},"availableDate":{"value":"2021-06-28T08:40:00","locked":false,"editable":true},"tags":{"value":["condition:new","condition:used","other:hello-test"],"locked":false},"recipients":{"value":[" "],"locked":false,"editable":true},"uid":"bb0ec41e-35bd-46c1-adf8-b4a8693923dd","state":"DEFAULT","displayName":"28 June version 4 WIP","hyperlinks":{"locked":false,"editable":true},"liveVersionAvailable":true,"secondaryRecipients":{"value":[" "],"locked":false,"editable":true}}

    const newObject = {"contentType":"ABOUT_MESSAGE","id":"b7321bbc-d77c-451f-ba73-1bac836d998b","revision":4,"owner":{"id":"gmps-abel","displayName":"SELF"},"title":{"value":"28 June master content test","locked":false,"editable":true},"subTitle":{"value":"28 June master content test","locked":false,"editable":true},"media":{"value":{"primaryImages":[{"assetType":"Image","id":"54cae556-e75a-474a-80fb-c7ab448cdbb5","url":{"value":"https://media-dmg.dit-cfi-pdx.assets-cdk.com/websites/content/cblt-ms-gmps-en-us//027d3dbdff4c4d8793fd0daf8003d342.jpg","locked":false},"tags":{"value":[],"locked":false},"name":{"value":"1","locked":false},"altText":{"value":"1","locked":false},"aspectRatios":{"16:9":{"url":"https://media-dmg.dit-cfi-pdx.assets-cdk.com/websites/content/cblt-ms-gmps-en-us//027d3dbdff4c4d8793fd0daf8003d342_c2x0-356x200.jpg","topLeftX":2,"topLeftY":0,"width":356,"height":200,"zoom":-10.0}}}]},"locked":false,"editable":true},"audit":{"createdOn":"2021-07-16T10:09:51","createdBy":"Santosh.Sagare@sincrodigital.com"},"approval":{"approvedOn":"2021-07-21T06:05:51","approvedBy":"Soumita.Mallik@sincrodigital.com"},"availableDate":{"value":"2021-06-28T08:40:00","locked":false,"editable":true},"tags":{"value":["condition:new","condition:used","other:hello-test"],"locked":false},"recipients":{"value":[" "],"locked":false,"editable":true},"uid":"bb0ec41e-35bd-46c1-adf8-b4a8693923dd","state":"DEFAULT","displayName":"28 June version 4","hyperlinks":{"locked":false,"editable":true},"liveVersionAvailable":true,"secondaryRecipients":{"value":[" "],"locked":false,"editable":true}}

    return (
        <div className="right-section-body">
            <Header text="Right Section" type="right" actionItems={getActionItems("right")}/>
            
        </div>
    );
}

export default RightSection;