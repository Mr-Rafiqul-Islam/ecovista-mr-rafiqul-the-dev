import { getLocationByName } from "../location-utils";

export async function GET(_request, { params }) {
  const { name } = params;
  const locationData = getLocationByName(name);
  return Response.json(locationData);
}
