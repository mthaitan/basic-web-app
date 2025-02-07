export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "AM"
    );
  }

  if (query.includes("plus")) {
    const answer = (parseInt(query.substring(8,10)) + parseInt(query.substring(16,query.length-1)))
    return answer.toString();
  }

  if (query.includes("minus")) {
    if (query.length === 20) {
      const num1 = parseInt(query.substring(8,10))
      const num2 = parseInt(query.substring(18,query.length-1))
      const answer = num1 - num2
      return answer.toString();
    }
    else {
      const num1 = parseInt(query.substring(8,9))
      const num2 = parseInt(query.substring(17,query.length-1))
      const answer = num1 - num2
      return answer.toString();
    }
    
  }

  if (query.includes("multiplied")) {
    const answer = (parseInt(query.substring(8,10)) * parseInt(query.substring(24,query.length-1)))
    return answer.toString();
  }

  return "";
}
