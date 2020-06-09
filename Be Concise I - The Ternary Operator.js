//https://www.codewars.com/kata/56f3f6a82010832b02000f38

const describeAge = age => `You're a(n) ${age <= 12 ? "kid" : (age <= 17) ? "teenager" : (age <= 64) ? "adult" : "elderly"}`;