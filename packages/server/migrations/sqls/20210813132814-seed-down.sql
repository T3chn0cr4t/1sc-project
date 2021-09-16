DROP SCHEMA app CASCADE;
DROP SCHEMA app_private CASCADE;

REASSIGN OWNED BY ETUDIANT TO postgres;
REASSIGN OWNED BY MEDECIN TO postgres;
REASSIGN OWNED BY ENSEIGNANT TO postgres;
REASSIGN OWNED BY ATS TO postgres;
DROP OWNED BY ETUDIANT;
DROP OWNED BY MEDECIN;
DROP OWNED BY ENSEIGNANT;
DROP OWNED BY ATS;

DROP ROLE ANONYMOUS;

DROP ROLE ETUDIANT;
DROP ROLE MEDECIN;
DROP ROLE ENSEIGNANT;
DROP ROLE ATS;
DROP TYPE SEXE;

DROP TYPE SPECIALITE;

DROP TYPE FAMILY_STATUS;

DROP TYPE ROLE;

DROP EXTENSION "uuid-ossp";