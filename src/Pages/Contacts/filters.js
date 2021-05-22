export const filterFullName = (item, userName) => 
  item.name.first.toLowerCase().includes(userName.toLowerCase()) || 
  item.name.last.toLowerCase().includes(userName.toLowerCase())

export const filterNationality = (item, nationality) => {
  if(nationality === "all" || nationality === ""  ){
    return true
  }
  return item.nat === nationality
}
export const filterGender = (item, gender) => {
  if(gender === "all" || gender === ""){
    return true
  }
  return item.gender === gender
}
