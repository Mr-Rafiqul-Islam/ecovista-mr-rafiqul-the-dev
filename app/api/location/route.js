import { getLocation } from "./location-utils";

export async function GET() {
    const locations = getLocation();
    return Response.json(locations)
}