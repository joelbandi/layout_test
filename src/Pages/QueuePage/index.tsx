/** @jsxImportSource @emotion/react */

import { useStore } from "effector-react";
import { useEffect } from "react";
import { Page } from "../../components/Page";
import { fetchQueueItems, $filteredAppointments } from "./store"
import { FilterRightColumn } from "./filterRightColumn";

export const QueuePage = () => {
  const filteredAppointments = useStore($filteredAppointments)
  useEffect(() => {
    fetchQueueItems()
  })

  // Page is responsible for providing the skeleton for every page. Its concerns include 
  // 1. opening and closing right column
  // 2. providing layout and css wrappers to the components rendered inside it


  // It takes two props renderRightColumn and renderMiddleColumn. renderMiddleColumn takes in a method with 
  // two arguments show and hide so that middle column can control the right column
  // How and what gets rendered in there is the concern of the component thats using the page component for example; QueuePage

  // Feel free to do whatever logic that pertains to controlling what gets rendered into the props below as you want



  // Ideally all these controls must live in the effector store as how these components interact with each other is different 
  // and dependant on whether its queue page or patients page or appointment summary page.

  // However open and close of right column is consistently the same experience with all these pages and therefore only that state has been
  // "lifted up" to Page component for DRY purposes.

  return (
    <Page
      renderRightColumn={() => <FilterRightColumn />}
      renderMiddleColumn={(show: any, hide: any) => (
        <>
          <div>Queue Page</div>
          <button onClick={show}>show Filters</button>
          <button onClick={hide}>hide Filters</button>
          <hr />
          {filteredAppointments.map((appointment) => (
            <div css={[{ marginBottom: "3px" }]}>
              Appt ID: {appointment.id} and Reason: {appointment.reason}
            </div>
          ))}
        </>
      )}
    />
  );
};
