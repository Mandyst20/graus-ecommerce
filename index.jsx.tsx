
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Graus E-Commerce</h1>
        <p className="text-lg mt-2">Boost je social media met onze éénmalige pakketten</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Starterpakket</h2>
            <ul className="list-disc ml-5 text-sm mb-4">
              <li>Instagram Bio-optimalisatie</li>
              <li>10 Tips & Tricks</li>
              <li>Contentideeën</li>
            </ul>
            <p className="font-bold mb-2">€19 eenmalig</p>
            <Button variant="default">Bestel dit pakket</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Groei-pakket</h2>
            <ul className="list-disc ml-5 text-sm mb-4">
              <li>Alles uit Starterpakket</li>
              <li>30 contentideeën</li>
              <li>1 op maat gemaakte Reel-template</li>
            </ul>
            <p className="font-bold mb-2">€49 eenmalig</p>
            <Button variant="default">Bestel dit pakket</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Pro Boost-pakket</h2>
            <ul className="list-disc ml-5 text-sm mb-4">
              <li>Alles uit Groei-pakket</li>
              <li>Gegarandeerd 500 volgers erbij</li>
              <li>AI-geoptimaliseerde caption-lijst</li>
            </ul>
            <p className="font-bold mb-2">€99 eenmalig</p>
            <Button variant="default">Bestel dit pakket</Button>
          </CardContent>
        </Card>
      </section>

      <section className="bg-gray-100 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4">Contactformulier</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Naam" />
          <Input placeholder="E-mailadres" type="email" />
          <Input placeholder="Instagram gebruikersnaam" className="md:col-span-2" />
          <Input placeholder="Eventuele vraag" className="md:col-span-2" />
          <Button type="submit" className="md:col-span-2">Verzenden</Button>
        </form>
        <p className="text-xs mt-2">* Informatie wordt automatisch naar mandysteins20@gmail.com verzonden.</p>
      </section>
    </div>
  );
}
