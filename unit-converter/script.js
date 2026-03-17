/**
 * Conversion Logic for Metric/Imperial Units
 */

// Constants
const METER_TO_FEET = 3.28084;
const FEET_TO_METER = 0.3048;
const LITER_TO_GALLON = 0.264172;
const GALLON_TO_LITER = 3.78541;
const KILO_TO_POUND = 2.20462;
const POUND_TO_KILO = 0.453592;

// Elements
const inputEl = document.getElementById("input-number");
const convertBtn = document.getElementById("convert-btn");

// UI Spans for updating
const inputSpans = document.querySelectorAll(".unit-input");
const meterToFeetVal = document.getElementById("meter-to-feet");
const feetToMeterVal = document.getElementById("feet-to-meter");
const litersToGallonsVal = document.getElementById("liters-to-gallons");
const gallonsToLitersVal = document.getElementById("gallons-to-liters");
const kilosToPoundsVal = document.getElementById("kilos-to-pounds");
const poundsToKilosVal = document.getElementById("pounds-to-kilos");

/**
 * Main conversion function
 */
function renderConversions() {
    const val = parseFloat(inputEl.value);

    // Guard for empty or non-number inputs
    if (isNaN(val)) return;

    // Update all base unit display spans
    inputSpans.forEach(span => {
        span.textContent = val;
    });

    // Length calculations
    meterToFeetVal.textContent = (val * METER_TO_FEET).toFixed(3);
    feetToMeterVal.textContent = (val * FEET_TO_METER).toFixed(3);

    // Volume calculations
    litersToGallonsVal.textContent = (val * LITER_TO_GALLON).toFixed(3);
    gallonsToLitersVal.textContent = (val * GALLON_TO_LITER).toFixed(3);

    // Mass calculations
    kilosToPoundsVal.textContent = (val * KILO_TO_POUND).toFixed(3);
    poundsToKilosVal.textContent = (val * POUND_TO_KILO).toFixed(3);
}

// Event Listeners
convertBtn.addEventListener("click", renderConversions);

// Trigger on 'Enter' key
inputEl.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        renderConversions();
    }
});

// Initial run
renderConversions();