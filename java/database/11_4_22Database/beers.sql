--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.3

-- Started on 2022-11-04 19:19:17 PDT

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
-- TOC entry 216 (class 1259 OID 59792)
-- Name: beers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.beers (
    beer_id integer NOT NULL,
    beer_img character varying(500),
    brewery_id integer NOT NULL,
    beer_name character varying(200),
    beer_abv numeric(2,1),
    beer_type character varying(60),
    beer_description character varying(200),
    beer_active boolean
);


ALTER TABLE public.beers OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 59791)
-- Name: beers_beer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.beers_beer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.beers_beer_id_seq OWNER TO postgres;

--
-- TOC entry 3593 (class 0 OID 0)
-- Dependencies: 215
-- Name: beers_beer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.beers_beer_id_seq OWNED BY public.beers.beer_id;


--
-- TOC entry 3446 (class 2604 OID 59795)
-- Name: beers beer_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.beers ALTER COLUMN beer_id SET DEFAULT nextval('public.beers_beer_id_seq'::regclass);


--
-- TOC entry 3587 (class 0 OID 59792)
-- Dependencies: 216
-- Data for Name: beers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.beers (beer_id, beer_img, brewery_id, beer_name, beer_abv, beer_type, beer_description, beer_active) FROM stdin;
\.


--
-- TOC entry 3594 (class 0 OID 0)
-- Dependencies: 215
-- Name: beers_beer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.beers_beer_id_seq', 1, false);


-- Completed on 2022-11-04 19:19:18 PDT

--
-- PostgreSQL database dump complete
--

