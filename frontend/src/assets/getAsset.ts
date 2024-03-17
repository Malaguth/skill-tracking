import deck from './icons/deck.png'
import skillTrackingLogoExample from './skill-tracking-logo-example.png'

const getAsset = ({asset}:{asset : string})=> {

switch (asset) {
    case "skillTrackingLogoExample":
        return skillTrackingLogoExample
    case "deck":
        return deck
    default:
        return ""
}
}

export default getAsset