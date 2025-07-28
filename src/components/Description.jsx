function Description({ weather, unit, convertTemperature }) {
  return (
    <div className="mt-4 text-sm text-gray-200">
      <p>
        Weather details for <strong>{weather.location.name}</strong> are displayed above.
      </p>
      {/* You can expand this section later */}
    </div>
  );
}

export default Description;
