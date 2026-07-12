function formatEventYear(year) {
  return year < 0 ? `${Math.abs(year)} BC` : `${year}`;
}

const LegalHistoryBanner = ({ event }) => {
  if (!event) return null;

  return (
    <div className="legal-history-banner">
      <span className="font-medium">Today in legal history, {formatEventYear(event.year)}:</span>{" "}
      {event.text}
    </div>
  );
};

export default LegalHistoryBanner;
