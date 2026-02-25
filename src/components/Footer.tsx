const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Rasindu Anuththara Fernando. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
