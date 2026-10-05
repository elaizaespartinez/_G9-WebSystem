export function getLocalReply(messages, hotline) {
    const latestMessage = messages.at(-1)?.content.toLowerCase() || "";

    if (/urgent|emergency|trapped|danger|help me|rising fast/.test(latestMessage)) {
        return `If you are in immediate danger, call local emergency services first and move to a safe higher location if you can do so safely. Do not walk or drive through floodwater. Follow official instructions from PAGASA, PHIVOLCS, NDRRMC, and your LGU or barangay DRRM office. For local assistance, call ${hotline}.`;
    }

    if (/flood|rain|water/.test(latestMessage)) {
        return "Before or during heavy rain: charge your phone, prepare water and medicines, move documents and appliances higher, keep a go-bag ready, and monitor official PAGASA and LGU advisories. Never walk or drive through floodwater.";
    }

    if (/typhoon|bagyo|wind|storm/.test(latestMessage)) {
        return "Prepare a go-bag with water, food, medicines, IDs, a flashlight, batteries, and a power bank. Secure loose objects, stay indoors away from windows, and follow PAGASA, NDRRMC, and LGU evacuation instructions.";
    }

    if (/earthquake|lindol/.test(latestMessage)) {
        return "During an earthquake, Drop, Cover, and Hold On. Stay away from windows and heavy objects, then evacuate calmly after the shaking stops. Expect aftershocks and follow PHIVOLCS and LGU advisories.";
    }

    if (/fire|sunog/.test(latestMessage)) {
        return "Leave immediately using the safest exit, stay low under smoke, do not use elevators, and call the fire service from a safe location. Do not re-enter until authorities declare the area safe.";
    }

    if (/landslide|guho/.test(latestMessage)) {
        return "Move away from slopes, steep hills, and flowing mud or debris. Do not cross a damaged road or bridge. Follow evacuation instructions from your barangay or LGU DRRM office.";
    }

    return `I can help with floods, typhoons, earthquakes, landslides, fires, and disaster preparedness. Please follow official advisories from PAGASA, PHIVOLCS, NDRRMC, and your LGU or barangay DRRM office. For urgent danger, call local emergency services first. For local assistance, call ${hotline}.`;
}