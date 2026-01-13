import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  gridRow: string;
  gridColumn: string;
}

@Component({
  selector: 'app-industries-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries-grid.component.html',
  styleUrl: './industries-grid.component.scss'
})
export class IndustriesGridComponent {
  industries: Industry[] = [
    {
      id: "1",
      title: "Electrical & Electronics",
      description: "Precision screws and connectors for electrical panels, enclosures, and components.",
      image: "/Industries/Electrical.webp",
      gridRow: "1 / span 4",
      gridColumn: "1 / span 7"
    },
    {
      id: "2",
      title: "Agricultural & Construction Equipment",
      description: "Heavy-duty fasteners built to withstand outdoor stress and rugged machinery use.",
      image: "/Industries/Agricultural & Construction Equipment.webp",
      gridRow: "1 / span 8",
      gridColumn: "8 / span 5"
    },
    {
      id: "3",
      title: "Automotive OEMs",
      description: "High-precision fasteners for high-performance assemblies and manufacturing lines.",
      image: "/Industries/Automotive.webp",
      gridRow: "5 / span 4",
      gridColumn: "1 / span 7"
    },
    {
      id: "4",
      title: "Chemicals & Fertilizers",
      description: "Acid-resistant fasteners for chemical plants and heavy-process industries.",      
      image: "/Industries/Chemicals & Fertilizers.webp",
      gridRow: "9 / span 6",
      gridColumn: "1 / span 4"
    },
    {
      id: "5",
      title: "Shipbuilding & Marine",
      description: "Marine-grade stainless fasteners for vessels, docks, and offshore structures.",
      image: "/Industries/Shipbuilding & Marine.webp",
      gridRow: "9 / span 6",
      gridColumn: "5 / span 8"
    },
    {
      id: "6",
      title: "Hydro Power",
      description: "Structural fasteners for turbines, dams, and high-pressure hydro systems.",
      image: "/Industries/Hydro Power.webp",
      gridRow: "15 / span 8",
      gridColumn: "1 / span 5"
    },
    {
      id: "7",
      title: "Paper & Pulp",
      description: "Industrial-grade fasteners for high-moisture and chemical-intensive environments.",
      image: "/Industries/Paper & Pulp.webp",
      gridRow: "15 / span 4",
      gridColumn: "6 / span 7"
    },
    {
      id: "8",
      title: "Medical Equipment",
      description: "Corrosion-resistant, hygiene-grade fasteners for medical devices and cleanroom environments.",
      image: "/Industries/Medical Equipment.webp",
      gridRow: "19 / span 4",
      gridColumn: "6 / span 7"
    },
    {
      id: "9",
      title: "Electric Vehicle & Transportation",
      description: "Lightweight, high-strength fasteners for EV platforms and mobility systems.",
      image: "/Industries/Ev.webp",
      gridRow: "23 / span 4",
      gridColumn: "1 / span 12"
    },
    {
      id: "10",
      title: "Nuclear & Thermal Power",
      description: "Safety-critical fasteners built for high-heat, high-stress power systems.",
      image: "/Industries/Nuclear & Thermal Power.webp",
      gridRow: "27 / span 5",
      gridColumn: "1 / span 8"
    },
    {
      id: "11",
      title: "Solar & Wind Energy",
      description: "Weather-resistant fasteners for long-lasting renewable energy installations.",
      image: "/Industries/Solar & Wind Energy.webp",
      gridRow: "27 / span 5",
      gridColumn: "9 / span 4"
    }
  ];
}
