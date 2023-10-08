document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Ambil nilai berat badan dan tinggi badan dari input
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  // Hitung BMI
  const bmi = weight / (height / 100) ** 2;

  // Tentukan kategori BMI
  const category = determineCategory(bmi);

  // Tampilkan hasil BMI dan kategori
  displayResult(bmi, category);
});

// Function untuk menentukan kategori BMI
function determineCategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    return "Normal";
  } else if (bmi >= 25 && bmi < 30) {
    return "Overweight";
  } else {
    return "Obesity";
  }
}

// Function untuk menampilkan hasil BMI dan kategori
function displayResult(bmi, category) {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Your BMI is ${bmi.toFixed(
    1
  )} which means You are ${category}`;
}
