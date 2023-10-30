--
-- PostgreSQL database dump
--

-- Dumped from database version 12.16 (Ubuntu 12.16-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.16 (Ubuntu 12.16-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cities; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cities (
    id integer NOT NULL,
    name character varying(50) NOT NULL
);


--
-- Name: cities_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;


--
-- Name: flights; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.flights (
    id integer NOT NULL,
    origin integer NOT NULL,
    destination integer NOT NULL,
    date date NOT NULL
);


--
-- Name: flights_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.flights_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: flights_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.flights_id_seq OWNED BY public.flights.id;


--
-- Name: passengers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.passengers (
    id integer NOT NULL,
    "firstName" character varying(100) NOT NULL,
    "lastName" character varying(100) NOT NULL
);


--
-- Name: passengers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.passengers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: passengers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.passengers_id_seq OWNED BY public.passengers.id;


--
-- Name: travels; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.travels (
    id integer NOT NULL,
    "passengerId" integer NOT NULL,
    "flightId" integer NOT NULL
);


--
-- Name: travels_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.travels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: travels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.travels_id_seq OWNED BY public.travels.id;


--
-- Name: cities id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);


--
-- Name: flights id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights ALTER COLUMN id SET DEFAULT nextval('public.flights_id_seq'::regclass);


--
-- Name: passengers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.passengers ALTER COLUMN id SET DEFAULT nextval('public.passengers_id_seq'::regclass);


--
-- Name: travels id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels ALTER COLUMN id SET DEFAULT nextval('public.travels_id_seq'::regclass);


--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.cities VALUES (1, 'Salvador');
INSERT INTO public.cities VALUES (2, 'Fortaleza');
INSERT INTO public.cities VALUES (3, 'São Paulo');
INSERT INTO public.cities VALUES (4, 'Maragogi');


--
-- Data for Name: flights; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.flights VALUES (1, 1, 2, '2023-11-24');
INSERT INTO public.flights VALUES (2, 2, 1, '2023-12-24');
INSERT INTO public.flights VALUES (3, 3, 1, '2023-12-24');
INSERT INTO public.flights VALUES (4, 1, 3, '2024-02-24');
INSERT INTO public.flights VALUES (5, 1, 3, '2024-02-24');
INSERT INTO public.flights VALUES (6, 1, 3, '2024-02-24');
INSERT INTO public.flights VALUES (7, 1, 3, '2024-02-24');
INSERT INTO public.flights VALUES (8, 4, 2, '2024-02-24');
INSERT INTO public.flights VALUES (9, 4, 2, '2024-02-24');
INSERT INTO public.flights VALUES (10, 4, 2, '2024-02-24');
INSERT INTO public.flights VALUES (11, 2, 4, '2024-02-24');
INSERT INTO public.flights VALUES (12, 2, 3, '2024-02-24');


--
-- Data for Name: passengers; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.passengers VALUES (1, 'Jo', 'Alves');
INSERT INTO public.passengers VALUES (2, 'Joana', 'Alves');
INSERT INTO public.passengers VALUES (4, 'Fulana', 'Silva');
INSERT INTO public.passengers VALUES (5, 'Fulana', 'Silva');
INSERT INTO public.passengers VALUES (6, 'Maya', 'Rodrigues');
INSERT INTO public.passengers VALUES (7, 'Maya', 'Rodrigues');


--
-- Data for Name: travels; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.travels VALUES (1, 4, 8);
INSERT INTO public.travels VALUES (2, 1, 2);
INSERT INTO public.travels VALUES (3, 1, 2);
INSERT INTO public.travels VALUES (4, 1, 3);
INSERT INTO public.travels VALUES (5, 1, 4);
INSERT INTO public.travels VALUES (6, 1, 5);
INSERT INTO public.travels VALUES (7, 2, 5);
INSERT INTO public.travels VALUES (8, 2, 4);


--
-- Name: cities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cities_id_seq', 4, true);


--
-- Name: flights_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.flights_id_seq', 12, true);


--
-- Name: passengers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.passengers_id_seq', 7, true);


--
-- Name: travels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.travels_id_seq', 8, true);


--
-- Name: cities cities_name_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_name_key UNIQUE (name);


--
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);


--
-- Name: flights flights_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_pkey PRIMARY KEY (id);


--
-- Name: passengers passengers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.passengers
    ADD CONSTRAINT passengers_pkey PRIMARY KEY (id);


--
-- Name: travels travels_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT travels_pkey PRIMARY KEY (id);


--
-- Name: flights flights_destination_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_destination_fkey FOREIGN KEY (destination) REFERENCES public.cities(id);


--
-- Name: flights flights_origin_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.flights
    ADD CONSTRAINT flights_origin_fkey FOREIGN KEY (origin) REFERENCES public.cities(id);


--
-- Name: travels travels_flightId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT "travels_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES public.flights(id);


--
-- Name: travels travels_passengerId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.travels
    ADD CONSTRAINT "travels_passengerId_fkey" FOREIGN KEY ("passengerId") REFERENCES public.passengers(id);


--
-- PostgreSQL database dump complete
--

