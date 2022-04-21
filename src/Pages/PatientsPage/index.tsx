import { Page } from "../../components/Page";

export const PatientsPage = () => {
  const renderRightColumn = () => <span>right column</span>;
  const renderMiddleColumn = (show: any, hide: any) => {
    return (
      <>
        <div>Patients Page</div>
        <button onClick={show}>show</button>
        <button onClick={hide}>hide</button>
      </>
    );
  };

  return (
    <Page
      renderRightColumn={renderRightColumn}
      renderMiddleColumn={renderMiddleColumn}
    />
  );
};
