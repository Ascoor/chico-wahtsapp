INSERT INTO activities (name) VALUES
('السباحة'),
('الملاعب');

INSERT INTO activity_services (activity_id, name, duration, price) VALUES
(1, 'سباحة خاصة', 60, 100.00),
(1, 'سباحة حرة', 45, 50.00),
(2, 'ملعب كرة قدم', 90, 200.00),
(2, 'تدريب كرة سلة', 60, 150.00);

-- Swimming trainers
INSERT INTO swimming_trainers (name) VALUES
('Coach Ahmed'),
('Coach Sara');

-- Football academies
INSERT INTO football_academies (name) VALUES
('Elite Academy'),
('Youth Stars');

-- Football coaches
INSERT INTO football_coaches (name, academy_id) VALUES
('Coach Ali', 1),
('Coach Omar', 2);

-- Football players
INSERT INTO football_players (academy_id, name) VALUES
(1, 'Player One'),
(1, 'Player Two'),
(2, 'Player A');
