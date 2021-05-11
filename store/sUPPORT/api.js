import axios from "axios"
const sUPPORT = axios.create({
  baseURL:
    "https://autodesk-communities.force.com/customer/apex/Case_CustomerPortalLandingPage",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
