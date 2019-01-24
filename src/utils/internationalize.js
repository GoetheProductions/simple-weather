export default (city) => {
  let internationalizedCity = city;

  internationalizedCity = internationalizedCity.replace("æ", "ae");
  internationalizedCity = internationalizedCity.replace("ø", "oe");
  internationalizedCity = internationalizedCity.replace("å", "aa");

  return internationalizedCity;
}
