--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.3

-- Started on 2022-11-04 19:18:25 PDT

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
-- TOC entry 212 (class 1259 OID 59776)
-- Name: brewery; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.brewery (
    brewery_id integer NOT NULL,
    brewery_img character varying(500),
    brewery_hours character varying(200),
    brewery_history character varying(500),
    brewery_email character varying(100),
    beer_id integer NOT NULL,
    brewery_name character varying(200),
    brewery_phone character varying(10),
    brewery_website character varying(200),
    brewery_active boolean,
    brewery_address character varying(100)
);


ALTER TABLE public.brewery OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 59775)
-- Name: brewery_brewery_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.brewery_brewery_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.brewery_brewery_id_seq OWNER TO postgres;

--
-- TOC entry 3595 (class 0 OID 0)
-- Dependencies: 211
-- Name: brewery_brewery_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.brewery_brewery_id_seq OWNED BY public.brewery.brewery_id;


--
-- TOC entry 3446 (class 2604 OID 59779)
-- Name: brewery brewery_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brewery ALTER COLUMN brewery_id SET DEFAULT nextval('public.brewery_brewery_id_seq'::regclass);


--
-- TOC entry 3589 (class 0 OID 59776)
-- Dependencies: 212
-- Data for Name: brewery; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.brewery (brewery_id, brewery_img, brewery_hours, brewery_history, brewery_email, beer_id, brewery_name, brewery_phone, brewery_website, brewery_active, brewery_address) FROM stdin;
\.


--
-- TOC entry 3596 (class 0 OID 0)
-- Dependencies: 211
-- Name: brewery_brewery_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.brewery_brewery_id_seq', 1, false);


--
-- TOC entry 3448 (class 2606 OID 59783)
-- Name: brewery brewery_email; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.brewery
    ADD CONSTRAINT brewery_email UNIQUE (brewery_email);


-- Completed on 2022-11-04 19:18:26 PDT

--
-- PostgreSQL database dump complete
--

