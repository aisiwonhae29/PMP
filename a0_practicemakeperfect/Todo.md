# Todo Obj

### list to do

- event loop, event queue, working order.
- find out about clicking something
  - click coordinates
- coockie usage
- subscribe logic
- sort about
- array
- go4
- axios.get('/operator/ocpp2/getChargingScheduleId2', { params: { profile_id }})
  .then((result) => {
    // Process the result
    after this in chrome dev tools indicates this with pending, doesn't make result.
    setChargingProfileDetail2(result.data);
    getchargingSchedule2_id();
  })
  .catch((error) => {
    // Handle any errors
    console.error('Error fetching data:', error);
  });