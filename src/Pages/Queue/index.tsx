import { Page } from "../../components/Page";

export const QueuePage = () => {
  const renderRightColumn = () => <span>right column</span>;
  const renderMiddleColumn = (show: any, hide: any) => {
    return (
      <>
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
