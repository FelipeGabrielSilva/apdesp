const Mapa: React.FC = () => {
  return (
    <div className="bg-muted rounded-lg overflow-hidden">
      <div className="w-full h-32 bg-gradient-card flex items-center justify-center">
        <div className="text-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.8113792861354!2d-50.41443122484662!3d-22.660820179428995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94953998e9ba0941%3A0x2375174789968747!2sR.%20Smith%20Vasconcelos%2C%20691%20-%20Centro%2C%20Assis%20-%20SP%2C%2019814-010!5e0!3m2!1spt-BR!2sbr!4v1758046664337!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Localização da APDESP"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
