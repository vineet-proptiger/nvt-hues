const fs = require('fs');

let content = fs.readFileSync('components/Footer.jsx', 'utf8');

const oldPara = /NVT, established in 1986, is one of India's premier real estate developers with over 30 years of experience\. The group has a strong presence across Bengaluru, Chennai, Hyderabad, and Mysuru, delivering landmark residential, commercial, retail, and hospitality projects\. NVT is known for its commitment to quality, innovation, and customer-centric approach\./;
const newPara = 'NVT Quality Lifestyle is a professionally managed real estate company dedicated to developing high-end residential projects. The company is part of the NVT Group established in 1995. NVT Quality Lifestyle is run by professionals who are alumni from IIT, Carnegie Mellon, Purdue and Wharton.';

content = content.replace(oldPara, newPara);

fs.writeFileSync('components/Footer.jsx', content, 'utf8');

