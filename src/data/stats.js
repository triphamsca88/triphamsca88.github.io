import awards from './awards.js'
import certificates from './certificates.js'

// Counts shown on the KPI strip are always derived from the data files.
export const certificateCount = () => certificates.length
export const awardCount = () => awards.length
