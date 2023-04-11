document.getElementById('hamburger').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('open');
  });

  
// Add the functionality to the buttons to download and view the resume online. Save this code in a file named `script.js`. // 

function downloadResume() {
  // Replace this URL with the actual resume file URL.
  const resumeURL = 'https://henontesfai.github.io/henontesfai/assets/CV.pdf';
  const link = document.createElement('a');
  link.href = resumeURL;
  link.download = 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

function viewResume() {
  // Replace this URL with the actual resume file URL.
  const resumeURL = 'https://henontesfai.github.io/henontesfai/assets/CV.pdf';
  window.open(resumeURL, '_blank');
};