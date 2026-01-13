import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Country {
  name: string;
  flag: string;
  region: string;
}

@Component({
  selector: 'app-global-export',
  imports: [CommonModule],
  templateUrl: './global-export.component.html',
  styleUrl: './global-export.component.scss'
})
export class GlobalExportComponent {
  row1Countries: Country[] = [
    { name: 'Australia', flag: 'https://flagcdn.com/w80/au.png', region: 'Oceania' },
    { name: 'Czech Republic', flag: 'https://flagcdn.com/w80/cz.png', region: 'Europe' },
    { name: 'Germany', flag: 'https://flagcdn.com/w80/de.png', region: 'Europe' },
    { name: 'Canada', flag: 'https://flagcdn.com/w80/ca.png', region: 'North America' },
    { name: 'Italy', flag: 'https://flagcdn.com/w80/it.png', region: 'Europe' },
    { name: 'South Africa', flag: 'https://flagcdn.com/w80/za.png', region: 'Africa' },
    { name: 'Poland', flag: 'https://flagcdn.com/w80/pl.png', region: 'Europe' },
    { name: 'Qatar', flag: 'https://flagcdn.com/w80/qa.png', region: 'Middle East' },
    { name: 'Malaysia', flag: 'https://flagcdn.com/w80/my.png', region: 'Asia' }
  ];

  row2Countries: Country[] = [
    { name: 'Indonesia', flag: 'https://flagcdn.com/w80/id.png', region: 'Asia' },
    { name: 'United Kingdom', flag: 'https://flagcdn.com/w80/gb.png', region: 'Europe' },
    { name: 'Vietnam', flag: 'https://flagcdn.com/w80/vn.png', region: 'Asia' },
    { name: 'Nepal', flag: 'https://flagcdn.com/w80/np.png', region: 'Asia' },
    { name: 'France', flag: 'https://flagcdn.com/w80/fr.png', region: 'Europe' },
    { name: 'UAE', flag: 'https://flagcdn.com/w80/ae.png', region: 'Middle East' },
    { name: 'Bahrain', flag: 'https://flagcdn.com/w80/bh.png', region: 'Middle East' },
    { name: 'United States', flag: 'https://flagcdn.com/w80/us.png', region: 'North America' },
    { name: 'Saudi Arabia', flag: 'https://flagcdn.com/w80/sa.png', region: 'Middle East' }
  ];
}
